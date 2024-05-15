import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { codeToFiles } from '../../utils/mdxToSandpack';

interface SandpackComponentProps {
  files?: Record<string, { code: string }>;
  options?: Record<string, any>;
  children?: string;
}

const SandpackComponent: React.FC<SandpackComponentProps> = ({ files, options, children }) => {
  const finalFiles = files || (children ? codeToFiles(children.trim()) : {});

  return (
    <Sandpack
      template="react"
      files={finalFiles}
      options={options}
    />
  );
};

export default SandpackComponent;
