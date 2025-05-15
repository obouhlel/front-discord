export interface BotInfo {
  status: string;
  message: string;
  commands: Command[];
}

export interface Command {
  id: string;
  application_id: string;
  version: string;
  default_member_permissions: null;
  type: number;
  name: string;
  description: string;
  dm_permission: boolean;
  contexts: number[];
  integration_types: number[];
  nsfw: boolean;
  options?: CommandOption[];
}

export interface CommandOption {
  type: number;
  name: string;
  description: string;
  required: boolean;
}