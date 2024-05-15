export const codeToFiles = (code: string): Record<string, { code: string }> => {
    return {
      '/App.js': {
        code,
      },
    };
  };