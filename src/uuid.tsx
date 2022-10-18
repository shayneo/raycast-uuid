import { Clipboard, showHUD } from "@raycast/api";

import crypto from 'crypto'

export default async () => {
  const id = crypto.randomUUID();

  await Clipboard.copy(id);

  await showHUD(`Copied UUID: ${id}`)
};