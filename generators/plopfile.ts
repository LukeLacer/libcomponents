module.exports = function (plop) {
	
    plop.setGenerator('component', {
      description: 'application component',

      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'component name?'
        }
      ],
      actions: [
        {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/index.tsx.hbs',
        },
        {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/component.tsx.hbs',
        },
        {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/styles.tsx',
            templateFile: 'templates/styles.tsx.hbs',
        },
        {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: 'templates/stories.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.json',
          templateFile: 'templates/stories.json.hbs',
      }
      ]
    })
  
  }