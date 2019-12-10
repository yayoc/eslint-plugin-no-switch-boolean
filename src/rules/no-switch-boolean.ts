import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: "Don't use just boolean for switch expression",
      category: "Stylistic Issues",
      recommended: false
    },
    fixable: "code",
    schema: []
  },
  create: function(context: any) {
    return {
      "SwitchStatement > Literal": (node: any) => {
        if (node.raw === "true" || node.raw === "false") {
          context.report({
            message: "Don't use just boolean for switch expression",
            node
          });
        }
      }
    };
  }
};

export = rule;
