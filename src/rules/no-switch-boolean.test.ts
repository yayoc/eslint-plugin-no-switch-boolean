import { RuleTester } from "eslint";
import rule from "./no-switch-boolean";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

tester.run("no-switch-boolean", rule, {
  valid: [{ code: `switch (a) {}` }],
  invalid: [
    {
      code: `switch (true) {}`,
      errors: [{ message: "Don't use just boolean for switch expression" }]
    },
    {
      code: `switch (false) {}`,
      errors: [{ message: "Don't use just boolean for switch expression" }]
    }
  ]
});
