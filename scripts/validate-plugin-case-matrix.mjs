import { decideBridgeActivation } from '../plugin/logic.ts';
import { cases } from './plugin-case-matrix-cases.mjs';

const config = { testTrigger: 'bridge-plugin-test' };
let failures = 0;
for (const c of cases) {
  const decision = decideBridgeActivation(c.prompt, config);
  const okActivation = decision.shouldActivate === c.expected;
  const okStyle = c.expected ? decision.contextStyle === c.style : true;
  if (!okActivation || !okStyle) {
    failures += 1;
    console.log(JSON.stringify({ id: c.id, prompt: c.prompt, expected: c.expected, expectedStyle: c.style, actual: decision }, null, 2));
  }
}
console.log(JSON.stringify({ total: cases.length, failures, passed: cases.length - failures }, null, 2));
if (failures) process.exit(1);
