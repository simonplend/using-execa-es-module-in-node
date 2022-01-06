import { execa } from "execa";

const subprocess = execa("sleep", ["5s"]);

setTimeout(() => {
  subprocess.cancel();
}, 1000);

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
