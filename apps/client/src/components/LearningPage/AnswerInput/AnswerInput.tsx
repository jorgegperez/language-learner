import { Button, Select, Tag } from "antd";
import { useLearningForm } from "../../../hooks";
import { useMemo, useState } from "react";
import { OptionsWrapper } from "./AnswerInput.styles";
import { IoMdClose } from "react-icons/io";
import { shuffleArray } from "../../../utils";

export const AnswerInput = () => {
  const { exercise } = useLearningForm();
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const words = useMemo(() => {
    if (!exercise) return [];
    return shuffleArray(exercise.spanish.split(" "));
  }, [exercise]);

  const handleSelectWord = (word: string) => {
    setSelectedWords((prev) => [...prev, word]);
  };

  const handleRemoveWord = (word: string) => {
    setSelectedWords((prev) => prev.filter((w) => w !== word));
  };

  return (
    <>
      <Select
        mode="tags"
        value={selectedWords}
        options={words?.map((word) => ({ label: word, value: word }))}
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
            <span>{value}</span>
          </Tag>
        )}
      />
      <OptionsWrapper>
        {words
          ?.filter((word) => !selectedWords.includes(word))
          .map((word) => (
            <Button key={word} onClick={() => handleSelectWord(word)}>
              {word}
            </Button>
          ))}
      </OptionsWrapper>
    </>
  );
};
