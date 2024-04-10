export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const resp = mathFunction();
    queue.push(resp);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
