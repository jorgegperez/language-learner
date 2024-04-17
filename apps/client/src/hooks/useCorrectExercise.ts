import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProfile } from "./useProfile";
import axios from "axios";
import { useGenerateExercise } from "./useGenerateExercise";
import { useLearningForm } from "./useLearningForm";

export const useCorrectExercise = () => {
  const { user } = useProfile();
  const { generateExercise } = useGenerateExercise();
  const { level, topic, setExercise } = useLearningForm();
  const queryClient = useQueryClient();

  const { mutate: addPoints, isPending: isAddingPoints } = useMutation({
    mutationFn: () =>
      axios.patch("http://localhost:3000/users/1", {
        points: (user?.points ?? 0) + 1,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setExercise();
      generateExercise({ level, topic });
    },
  });

  const { mutate: removeLife, isPending: isRemovingLife } = useMutation({
    mutationFn: () =>
      axios.patch("http://localhost:3000/users/1", {
        lives: (user?.lives ?? 0) - 1,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  return { addPoints, removeLife, isPending: isAddingPoints || isRemovingLife };
};
