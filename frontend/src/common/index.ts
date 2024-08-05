/**
 * Replaces all occurrences of a specified substring in a string with another substring.
 *
 * @param {string} string - The string in which to perform the replacement.
 * @param {string} search - The substring to search for.
 * @param {string} replace - The substring to replace the search substring with.
 * @return {string} A new string with all occurrences of the search substring replaced with the replace substring.
 */
export function replaceAll(string : string, search : string, replace : string) : string {
    return string.split(search).join(replace);
  }