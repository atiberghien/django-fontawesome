import os
import yaml

PATH = os.path.join(os.path.dirname(__file__), 'icons.yml')

def get_icon_choices():

    CHOICES = [('', '----------')]

    with open(PATH) as f:
        icons = yaml.safe_load(f)
    for key, value in icons.iteritems():
        CHOICES.append((
            key,
            (value['label'])
        ))
    return CHOICES

