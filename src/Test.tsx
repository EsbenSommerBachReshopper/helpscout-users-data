import { DefaultStyle, Heading, useHelpScoutContext } from "@helpscout/ui-kit";

function Test() {
  const { user } = useHelpScoutContext();
  return (
    <div className="App">
      <DefaultStyle />
      <Heading level="h1">Hi {user?.firstName || "there"} 👋</Heading>
    </div>
  );
}

export default Test;