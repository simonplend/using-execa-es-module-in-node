import { execa } from "execa";

try {
  const { stdout, stderr } = await execa("ls", ["missing-file.txt"]);

  console.log({ stdout, stderr });
} catch (error) {
  console.error(
    `ERROR: The command failed. stderr: ${error.stderr} (${error.exitCode})`
  );
}
