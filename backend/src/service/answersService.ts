import { Answers } from "../entities/Answers";
import { dataSource } from "../index";

export const addAnsers = async (
  answers: Partial<Answers>
): Promise<Answers> => {
  const userRepository = dataSource.getRepository(Answers);
  const data = userRepository.create(answers);
  return userRepository.save(data);
};

export const getAnswersService = async () => {
  const answers = await dataSource.getRepository(Answers).find();
  return answers;
};
