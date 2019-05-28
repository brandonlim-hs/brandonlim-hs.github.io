# Bash (Mac Os)

## .bash_profile vs .bashrc

> On OS X, Terminal by default runs a login shell every time

so use `.bash_profile` on Mac

[terminal - What is the difference between .bash_profile and .bashrc? - Ask Different](https://apple.stackexchange.com/questions/51036/what-is-the-difference-between-bash-profile-and-bashrc)

## Alias

1. Create .bash_profile if not exist
```
touch ~/.bash_profile
```
2. Append new alias to .bash_profile
```
echo "alias new_alias='some command'" >> .bash_profile
```
3. Restart Terminal
4. Verify new alias
```
alias new_alias
```

### References
1. [How do I create a permanent Bash alias? - Ask Ubuntu](https://askubuntu.com/questions/17536/how-do-i-create-a-permanent-bash-alias/17537#17537) (Alternative using .bash_aliases)

## Change Default Terminal Prompt

From:
```bash
192-168-1-104:~ brandonlim$ ls
```
To:
```bash
$ ls
```

1. Open Terminal
2. Create .bash_profile if not exist
```
touch ~/.bash_profile
```
3. Append config to .bash_profile
```
echo "export PS1='$ '" >> .bash_profile
```
4. Restart Terminal

### References
1. [How to Change Your Default Terminal Prompt in Mac OS X – Matt Mazur](https://mattmazur.com/2012/01/27/how-to-change-your-default-terminal-prompt-in-mac-os-x-lion/)