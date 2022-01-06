import { execa } from "execa";

const { stdout, stderr } = await execa("ls", ["missing-file.txt"]);

console.log({ stdout, stderr });
