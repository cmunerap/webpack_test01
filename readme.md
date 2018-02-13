# git

git uses a local repository and remote repositories

## Local repositories


### git init

Initialize the repository in the current folder
We can delete the folder .git to delete all the repositories in the changes
I can share the .git folder to allow someone to see the changes in the repository


### git status

This command tell me that there are some untraked changes


### git add {filename}

Tells git that this file must be tracked. It's like add in svn
This is staging. But if we made some other changes without commit the changes, the new changes will not be registered. In this case, we need to stage the file again with git add {filename}

``` 
git add . <- To track all the changes. To stage all the changes
git add *.html <- to stage all the html files only
``` 

### git commit
To register the change in the repository

``` 
git commit -m 'The message' <- to not enter in VIM
git commit -a -m 'The message' <- shortcut to stage and commit changes
``` 

### git log

To see the commit history


### .gitignore

File when we can specify the files and folders that we want to exclude


### git branch {branch_name}

The create a new branch. Depends on where are we. If we are in the master or in some branch


### git checkout {branch_name}

To switch or view to some branch
``` 
git checkout master <- to switch to the master
``` 


### git merge {branch_name}

To merge the changes on the current branch. Use 'git status' to see the current branch in wich we are working


### git stash

If where are in a branch and do some changes, but we need to do something in another branch but we are not ready to commit those changes, if we switch to the other branch we see the untracked changes in the other branch. With 'git stash' our changes are saved temporary without do the commit.

Then, we can switch to the other branch and work with the other changes. When we are ready to continue the work in the previous branch we can recover the changes that we don't commit with the command 'git stash apply' and then, continue with the changes.


### git remote

To see the remote repositories connected to the local repository
``` 
git remote -v <- Shows the remote repositories connected with the alias and the remote url
git remote add {alias} {http://github.com/somerepo.git} <- Add's a new remote repository to our local repository
``` 

### git clone

Clones a remote repository in our machine


### git fetch {alias}

This command fetch's (trae) all the changes in the remote repository, but don't merge with our local repository. It's like export in svn


### git pull {alias}

Similar to fetch, but now merge the changes in the current branch in our local repository. Similar to update in svn


### git push {alias} {branch_name}

Send all the changes to the remote repository

