"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getModels").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  // fallbackData is the default value of the model, reduce the number of requests
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        defaultValue={model}
        placeholder={model}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        options={models?.modelOptions}
        onChange={(e: any) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
