#git 批量 修改用户名和邮箱设置
#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL1="“chuanmingxie@outlook.com”"
OLD_EMAIL2="Chuanmingxie@outlook.com"
OLD_EMAIL3="75523225+ChuanmingXie@users.noreply.github.com"
CORRECT_NAME="ChuanmingXie"
CORRECT_EMAIL="ChuanmingXie@outlook.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL1" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL1" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags