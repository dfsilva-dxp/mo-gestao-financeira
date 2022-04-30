module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "template/containers/Component.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "template/containers/styles.ts.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "template/containers/stories.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test.tsx",
        templateFile: "template/containers/test.tsx.hbs"
      }
    ]
  });
};
