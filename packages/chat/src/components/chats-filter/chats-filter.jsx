import { useSearchParams } from "react-router-dom";

export const ChatsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value) {
      setSearchParams({ filter: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <input
      placeholder="search chats"
      onChange={handleChange}
      value={searchParams.get("filter") || ""}
    />
  );
};
