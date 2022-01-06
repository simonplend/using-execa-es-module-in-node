import { execa } from "execa";

const { stdout } = await execa("echo", ["execa is pretty neat!"]);

console.log({ stdout });
