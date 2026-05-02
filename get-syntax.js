export default function getSyntax(contentType) {
  switch (contentType) {
    case 'java':
      return {
        start: /^(\s*)\/\/\s*docs:start\s+(.+)$/,
        end: /^\s*\/\/\s*docs:end\s+(.+)$/,
        inline: /\/\/\s*docs:\s*(\S+)\s*$/
      };

    case 'html':
    case 'jte':
    case 'thymeleaf':
      return {
        start: /^(\s*)<!--\s*docs:start\s+(.+?)\s*-->$/,
        end: /^\s*<!--\s*docs:end\s+(.+?)\s*-->$/,
        inline: /^(\s*)<!--\s*docs:\s*(\S+)\s*-->$/
      };

    default:
      throw new Error(`Unsupported contentType: ${contentType}`);
  }
}