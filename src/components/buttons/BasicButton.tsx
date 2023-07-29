interface BasicButtonProps {
  onClick: () => void;
}

export const BasicButton = ({ onClick }: BasicButtonProps) => {
  return <button onClick={onClick}>テストボタン</button>;
};
