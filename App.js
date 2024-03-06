import { Button, TamaguiProvider, createTamagui, Text, Stack, Popover } from 'tamagui';
import { config } from '@tamagui/config/v3'

const tamaguiConfig = createTamagui(config)

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack alignItems='center' justifyContent="center" flex={1}>
        <Popover size="$5" allowFlip placement="top">
          <Popover.Trigger asChild>
            <Button>Menu</Button>
          </Popover.Trigger>
          <Popover.Content
            borderWidth={1}
            borderColor="$borderColor"
            enterStyle={{ y: -10, opacity: 0 }}
            exitStyle={{ y: -10, opacity: 0 }}
            elevate
          >
            <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
            <Stack p="$4">
              <Text>OMG!</Text>
            </Stack>
          </Popover.Content>
        </Popover>
      </Stack>
    </TamaguiProvider>
  );
}
