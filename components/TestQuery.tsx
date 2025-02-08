import { Button, Text, View } from "react-native";
import { useQuery } from "urql";

const TEST_QUERY = `
  query ExampleQuery($code: ID!) {
    continent(code: $code) {
      code
      name
    }
  }
`;

export const TestQueryComponent = () => {
  const [result, executeQuery] = useQuery({
    query: TEST_QUERY,
    variables: {
      code: "EU",
    },
    pause: true,
    requestPolicy: "network-only",
  });

  const handlePress = () => {
    executeQuery({ requestPolicy: "network-only" });
  };

  return (
    <View style={{ gap: 10 }}>
      <Button
        title="Execute Query"
        onPress={handlePress}
        disabled={result.fetching}
      />
      {result.error && <Text>Error: {result.error.message}</Text>}
      {result.fetching && <Text>Loading...</Text>}
      {result.data && <Text>Data: {JSON.stringify(result.data)}</Text>}
    </View>
  );
};
