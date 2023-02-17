import { InputField } from "./components/InputField";
import { Loading } from "./components/Loading";

export default function App() {
  function handleQuestionSubmit(question: string) {
    console.log(question);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="h-screen w-full flex flex-col md:max-w-4xl">
        <div className="flex-1">Chat container</div>

        <Loading />
        <InputField onSubmit={handleQuestionSubmit} />
      </div>
    </div>
  );
}
