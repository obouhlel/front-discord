export type MessageCommand = {
  name: string;
  description: string;
};

export type SlashCommandOption = {
  type: number;
  name: string;
  description: string;
  required?: boolean;
};

export type SlashCommand = {
  name: string;
  description: string;
  options: SlashCommandOption[];
  contexts: number[];
  integration_types: number[];
  type: number;
};

export type Commands = {
  messageCommands: MessageCommand[];
  slashCommands: SlashCommand[];
};
