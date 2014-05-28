## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
This is used to start tracking a file, or stage a change of a file, from your working directory, to your index. Add is a good term for this, since you are telling git to now track these files.

#### branch
This allows you to list the local branches you have, but when you add a name in parenthesis, a new branch is created with that name. This allows you to create your own branch of a project that  other people are working on, so you can make your own changes to it without affecting everyones work, and can be merged later on.

#### checkout
This tells git that you want to switch the branch that you are working on. To switch to a specific branch, you can type in 'git checkout branchname', with the name of your branch instead in place of branchname.

#### clone
By running git clone, you can essentially clone or copy a project locally, so that you can look at and edit the code yourself. This will give you the entire history of the project.

#### commit
After staging what you want to snapshot with git add, this is used to "save" the snapshot, as I like to put it. When making a commit, you create a saved version of your project that you can pull up at any time. It is required to leave a message with each commit to find your versions easier.

#### fetch
This will synchronize you with another repository, adding any data that you do not have locally, without merging the changes. It allows you to merge when you are ready.

#### log
This will display the list of commits on the branch you are in, with their commit messages displayed as well.

#### merge
This will merge a branch into your cuurrent branch, and creates a new commit if there are no conflicts.

#### pull
This is essentially the combination of the commands 'git fetch' and 'git merge'. It basically does what fetch does, except it merges changes right away. It is generally a better idea to use fetch so you can decide when to merge.

#### push
This will "push" (or upload, as I like to think of it) your changes to to a remote repository. It is used to share your commits, say on Github.

#### reset
This will be useful when you track a file for staging that you decide that you actually do not want to be in your snapshot when you commit. This will revert the staging area to what was there before modification. It can also be used to undo your last commit, putting the files back in stage.

#### rm
This will simply remove an entry from the staging area. The file will not be in the staging area at all and will not be included in the next commit, and is essentially deleted.

#### status
This will show you the status of your staging area, in comparison to the code in your working directory. It will tell you what files are untracked, what files are modified, and what files are staged.


## Release 4: Git Workflow

- Push files to a remote repository

git add file.ext
git commit -m 'message here'
git push

- Fetch changes

git remote add upstream https://yourURLhere.git
git fetch upstream
(This will store the upstream's master branch on your local branch)
git merge upstream/master
(Merges your master branch into the upstream branch)


- Commit locally

git add file.ext
git commit -m 'message here'


## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

I have not come across any errors... just yet.

## Release 6: Reflection

While learning all about git and Github, I was faced with a little confusion. There were so many commands and some of them seemed so similar, and I always got afraid that I would make errors that would hurt me. But when I read more, I started to get a really good feel of how git works. By going through a few commits through the command line, I was really able to get a feel of at least the most basic commands. I didn't have many specific questions, more just apprehension that for some reason something wouldn't work right. But as I tried a few times, git recorded all of my commits, added and removed the files I wanted, and worked well so far. It seems like a really amazing tool to update and share your project easily while saving every version that you commit. There are still some things that I wonder how they work exactly such as the differences between git fetch and git pull, and when I might want to use git pull instead. Otherwise I learned many commands and shortcuts that are helpful. I feel confident with the learning competencies of this section, but I still have to look at references once in a while. I enjoyed testing out commands in the terminal and having my changes made. If I found anything tedious it was reading an extensive amount about version history, as that seems almost self explanatory to me, while the specific commands are more complex.  

These two resources were great: http://www.siteground.com/tutorials/git/commands.htm and http://gitref.org/


