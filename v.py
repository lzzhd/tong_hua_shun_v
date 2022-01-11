#!/usr/bin/python
# coding=utf-8
import requests


def v_():
    res = requests.post('http://127.0.0.1:3000/data', data={'key': '1'}).json()
    res = res['data'].split(';')[0]
    return res


if __name__ == '__main__':
    v_()
