import os
import yaml

PATH = os.path.join(os.path.dirname(__file__), 'icons.yml')

def get_icon_choices():

    CHOICES = [('', '----------')]

    with open(PATH) as f:
        icons = yaml.safe_load(f)
    for key, value in icons.iteritems():
        if ('solid' in value['styles']):
            key = "fas fa-"+key
        elif ('brands' in value['styles']):
            key = "fab fa-"+key
        else:
            key = "far fa-"+key

        CHOICES.append((
            key,
            (value['label'])
        ))
    return CHOICES
