import { useMutation } from "@tanstack/react-query";
import { IFormData } from "../common";
import axios from "axios";
import { useLearningForm } from "./useLearningForm";

const API_URL = "http://127.0.0.1:5000";

export const useGenerateExercise = () => {
  const { setExercise } = useLearningForm();

  const { mutate: generateExercise, isPending } = useMutation({
    mutationFn: (values: IFormData) =>
      axios.post(`${API_URL}/generate`, values),
    onSuccess: (response) => setExercise(response.data),
  });

  return { generateExercise, isPending };
};
