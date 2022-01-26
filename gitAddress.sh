#修改设置
#!/bin/sh

git filter-repo --env-filter '

an="$GIT_AUTHOR_NAME"
am="$GIT_AUTHOR_EMAIL"
cn="$GIT_COMMITTER_NAME"
cm="$GIT_COMMITTER_EMAIL"

if [ "$GIT_COMMITTER_EMAIL" = "[ChuanmingXie@outlook.com]" ]
then
    cn="[ChuanmingXie]"
    cm="[ChuanmingXie@outlook.com]"
fi
if [ "$GIT_AUTHOR_EMAIL" = "[ChuanmingXie@outlook.com]" ]
then
    an="[ChuanmingXie]"
    am="[ChuanmingXie@outlook.com]"
fi

export GIT_AUTHOR_NAME="$an"
export GIT_AUTHOR_EMAIL="$am"
export GIT_COMMITTER_NAME="$cn"
export GIT_COMMITTER_EMAIL="$cm"
'