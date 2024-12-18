import { Button, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useForm } from "react-hook-form"

interface FormValues {
  query: string
}
interface Props {
    search : (query : string) => void;
}
const SearchBar = ({search} : Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => search(data.query));

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field
          label="query"
          invalid={!!errors.query}
          errorText={errors.query?.message}
        >
          <Input
            {...register("query", { required: "query is required" })}
          />
        </Field>
        <Button type="submit">Search</Button>
      </Stack>
    </form>
  )
}

export default SearchBar;
