import requests
import pynput

HOST = 'http://127.0.0.1'


def on_move(x, y):
    requests.post(HOST + '/move', data={
        'x': x,
        'y': y
    })


def on_click(x, y, button, pressed):
    button_type = None

    if button == pynput.mouse.Button.left:
        button_type = 'left'
    elif button == pynput.mouse.Button.right:
        button_type = 'right'
    elif button == pynput.mouse.Button.middle:
        button_type = 'middle'

    requests.post(HOST + '/click', data={
        'x': x,
        'y': y,
        'button': button_type,
        'pressed': pressed
    })


def on_scroll(x, y, dx, dy):
    requests.post(HOST + '/scroll', data={
        'x': x,
        'y': y,
        'dx': dx,
        'dy': dy
    })


with pynput.mouse.Listener(
    on_move=on_move,
    on_click=on_click,
    on_scroll=on_scroll
) as listener:
    listener.join()
