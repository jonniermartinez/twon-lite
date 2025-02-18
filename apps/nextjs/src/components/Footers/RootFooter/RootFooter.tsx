import { useEffect, useState } from 'react';
import { definePrimaryHotkey, getOS } from '~/common';

export const RootFooter = () => {
  const prompts = [
    'Enhance your text instantly',
    'Transform your words now',
    'Make your message shine',
    'Upgrade your writing quickly',
    'Elevate your text effortlessly',
    'Polish your prose with ease',
    'Boost your content instantly',
    'Refine your sentences now',
    'Optimize your words quickly',
    'Improve your text in a snap',
  ];

  const [randomPrompt, setRandomPrompt] = useState(prompts[0]);
  const currentOS = getOS(navigator.userAgent);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * prompts.length);

    setRandomPrompt(prompts[randomIndex]);
  }, []);

  return (
    <footer className="grid place-items-center gap-6">
      <div className="flex select-none items-center gap-4 text-neutral-500">
        {randomPrompt}
        <div className="flex items-center gap-2">
          <kbd className="flex h-6 items-center rounded-md bg-neutral-900 p-2 text-xs">
            {definePrimaryHotkey(currentOS)}
          </kbd>
          <kbd className="flex aspect-square h-6 items-center rounded-md bg-neutral-900 p-2 text-xs">K</kbd>
        </div>
      </div>
      <p className="mb-6 text-center text-base text-neutral-200">
        With ❤️ from&nbsp;
        <a href="https://x.com/serudda" className="text-primary-300 transition-colors hover:text-primary-200">
          @serudda
        </a>
        &nbsp;and&nbsp;
        <a href="https://x.com/zyruks" className="text-primary-300 transition-colors hover:text-primary-200">
          @zyruks
        </a>
      </p>
    </footer>
  );
};
