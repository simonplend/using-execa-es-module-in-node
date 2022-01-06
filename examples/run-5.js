import { execa } from "execa";

const subprocess = execa("echo", ["is it me you're looking for?"]);

subprocess.stdout.pipe(process.stdout);

try {
  const { stdout, stderr } = await subprocess;

  console.log({ stdout, stderr });
} catch (error) {
  if (error.isCanceled) {
    console.error(`ERROR: The command took too long to run.`)
  } else {
    console.error(error);
  }
}
