import type { Meta, StoryObj } from "@storybook/react";
import { BasicButton } from "@/components/buttons/BasicButton";

const meta: Meta<typeof BasicButton> = {
  title: "Buttons/BasicButton",
  component: BasicButton,
};

export default meta;
type Story = StoryObj<typeof BasicButton>;

const handleClick = () => {
  console.log("クリックされました。");
};

export const Primary: Story = {
  args: {
    label: "テストボタン",
    onClick: handleClick,
  },
};
