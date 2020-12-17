import os

path = './uesr.txt'
f = open(path, 'w')
f.write('hello world')  # 何も書き込まなくてファイルは作成されました
f.close()