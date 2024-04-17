import { Button, Select, Tag, message } from "antd";
import { useLearningForm } from "../../../hooks";
import { useMemo, useState } from "react";
import { FooterWrapper, OptionsWrapper } from "./AnswerInput.styles";
import { IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { shuffleArray } from "../../../utils";
import { useCorrectExercise } from "../../../hooks";

export const AnswerInput = () => {
  const { exercise } = useLearningForm();
  const { addPoints, removeLife } = useCorrectExercise();
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const words = useMemo(() => {
    if (!exercise) return [];
    const shuffledArray = shuffleArray(exercise.spanish.split(" "));
    return shuffledArray.map((word, i) => ({ id: i, word }));
  }, [exercise]);

  const isCorrectDisabled = useMemo(
    () => selectedWords.length !== words.length,
    [selectedWords, words]
  );

  const handleSelectWord = (word: string) => {
    setSelectedWords((prev) => [...prev, word]);
  };

  const handleRemoveWord = (word: string) => {
    setSelectedWords((prev) => prev.filter((w) => w !== word));
  };

  const handleCorrectExercise = () => {
    const isCorrect =
      selectedWords.map((index) => words[Number(index)].word).join(" ") ===
      exercise?.spanish;
    if (!isCorrect) {
      removeLife();
      return message.error("Incorrect answer :(");
    }
    addPoints();
    message.success("Correct!");
  };

  return (
    <>
      <Select
        mode="tags"
        value={selectedWords}
        options={words?.map((word) => ({ label: word.word, value: word.id }))}
        style={{ width: "100%" }}
        dropdownStyle={{ display: "none" }}
        suffixIcon={null}
        onSearch={() => null}
        tagRender={({ value }) => (
          <Tag
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 14,
            }}
            closeIcon={<IoMdClose onClick={() => handleRemoveWord(value)} />}
          >
            <span>
              {words.find((word) => word.id.toString() === value)?.word}
            </span>
          </Tag>
        )}
      />
      <OptionsWrapper>
        {words
          ?.filter((word) => !selectedWords.includes(String(word.id)))
          .map((word) => (
            <Button
              key={word.id}
              onClick={() => handleSelectWord(String(word.id))}
            >
              {word.word}
            </Button>
          ))}
      </OptionsWrapper>
      <FooterWrapper>
        <Button
          icon={<CiCircleCheck />}
          disabled={isCorrectDisabled}
          onClick={handleCorrectExercise}
        >
          Check
        </Button>
      </FooterWrapper>
    </>
  );
};
