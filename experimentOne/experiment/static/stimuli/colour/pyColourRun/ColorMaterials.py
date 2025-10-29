import numpy as np
from colormath.color_objects import LabColor, sRGBColor
from colormath.color_conversions import convert_color


def cielab2hex(color):
    rgb = convert_color(color, sRGBColor)
    return rgb.get_rgb_hex()


blue = LabColor(73.03, -19.98, -37.84)
teal = LabColor(88.62, -49.82, 0.21)
green = LabColor(87.24, -62.94, 41.00)
red = LabColor(53.23, 80.11, 67.22)
orange = LabColor(68.55, 40.91, 49.37)
yellow = LabColor(88.29, -0.98, 69.51)


def make_continuum(start, end, mid=None, N=100):
    if mid is not None:
        v1 = (mid.lab_l - start.lab_l, mid.lab_a - start.lab_a, mid.lab_b - start.lab_b)
        v2 = (end.lab_l - mid.lab_l, end.lab_a - mid.lab_a, end.lab_b - mid.lab_b)
        continuum = [LabColor(start.lab_l + i * v1[0], start.lab_a + i * v1[1],
                              start.lab_b + i * v1[2]) for i in np.linspace(0, 1, int(N/2))]
        continuum += [LabColor(mid.lab_l + i * v2[0], mid.lab_a + i * v2[1],
                              mid.lab_b + i * v2[2]) for i in np.linspace(0, 1, int(N/2))]
    else:
        v1 = (end.lab_l - start.lab_l, end.lab_a - start.lab_a, end.lab_b - start.lab_b)
        continuum = [LabColor(start.lab_l + i * v1[0], start.lab_a + i * v1[1],
                              start.lab_b + i * v1[2]) for i in np.linspace(0, 1, N)]
    return [cielab2hex(c) for c in continuum]


def make_bat(hex):
    intro = '''<?xml version="1.0" standalone="no"?>
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
                 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="1280.000000pt" height="1124.000000pt" viewBox="0 0 1280.000000 1124.000000"
                 preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g transform="translate(0.000000,1124.000000) scale(0.100000,-0.100000)"
                fill="'''
    end = '''" stroke="none">
            <path d="M11258 11225 c-177 -29 -377 -114 -524 -223 -199 -147 -860 -784
            -2019 -1946 -407 -408 -1083 -1081 -1501 -1496 -905 -897 -866 -856 -1754
            -1860 -124 -140 -371 -417 -550 -614 -179 -198 -439 -489 -579 -646 -963
            -1081 -1230 -1348 -2161 -2160 -179 -156 -370 -325 -425 -375 -55 -50 -210
            -192 -345 -315 -135 -123 -381 -350 -547 -503 l-302 -280 -103 -3 c-285 -6
            -428 -118 -445 -349 -6 -85 17 -164 78 -261 82 -130 175 -180 354 -191 113 -7
            212 8 283 43 67 33 181 142 212 203 29 57 36 142 17 202 l-14 47 366 325 c484
            429 655 578 1361 1183 789 676 1054 893 1452 1190 170 127 775 536 815 551
            120 46 3281 2407 4988 3727 1837 1420 2476 1950 2747 2275 113 136 131 178
            136 322 9 245 -67 435 -279 699 -154 191 -286 296 -453 361 -225 87 -592 130
            -808 94z"/>
            </g>
            </svg>
            '''
    return intro + hex + end


def make_bat_10(color):
    intro = '''<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.0"
   width="1279.6628pt"
   height="1134.1008pt"
   viewBox="0 0 1279.6628 1134.1008"
   preserveAspectRatio="xMidYMid meet"
   id="svg2"
   inkscape:version="0.91 r13725"
   sodipodi:docname="bat_10.svg">
  <defs
     id="defs12" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1056"
     id="namedview10"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="0.59"
     inkscape:cx="799.74016"
     inkscape:cy="702.33482"
     inkscape:window-x="1920"
     inkscape:window-y="24"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <metadata
     id="metadata4">
Created by potrace 1.15, written by Peter Selinger 2001-2017
<rdf:RDF>
  <cc:Work
     rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type
       rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
    <dc:title></dc:title>
  </cc:Work>
</rdf:RDF>
</metadata>
  <g
     transform="matrix(0.1,0,0,-0.1,-0.20786965,1134.233)"
     id="g6"
     style="fill:'''
    #000000
    end = ''';stroke:none">
    <path
       d="m 11258,11337 c -177,-29 -377,-34 -524,-143 -199,-147 -860,-784 -2019,-1946 C 8308,8840 7632,8167 7214,7752 6309,6855 6348,6896 5460,5892 5336,5752 5089,5475 4910,5278 4731,5080 4471,4789 4331,4632 3368,3551 3101,3284 2170,2472 1991,2316 1800,2115 1745,2065 1690,2015 1535,1905 1400,1782 1265,1659 1019,1432 853,1279 L 551,807 448,804 C 163,798 20,686 3,455 -3,370 20,291 81,194 163,64 256,14 435,3 c 113,-7 212,8 283,43 67,33 181,142 212,203 29,57 36,142 17,202 l 50,47 302,165 c 484,429 655,578 1361,1183 789,676 1054,893 1452,1190 170,127 775,536 815,551 120,46 3281,2407 4988,3727 1837,1420 2476,1950 2747,2275 113,136 131,338 136,482 9,245 -67,435 -279,699 -154,191 -286,296 -453,361 -225,87 -592,242 -808,206 z"
       id="path8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccsscccccccccccccccccccc" />
  </g>
</svg>
'''
    return intro + color + end


def make_bat_20(color):
    intro = '''<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.0"
   width="1279.6628pt"
   height="1149.8531pt"
   viewBox="0 0 1279.6628 1149.8531"
   preserveAspectRatio="xMidYMid meet"
   id="svg2"
   inkscape:version="0.91 r13725"
   sodipodi:docname="bat_20.svg">
  <defs
     id="defs12" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1056"
     id="namedview10"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="0.59"
     inkscape:cx="799.7401"
     inkscape:cy="702.33486"
     inkscape:window-x="1920"
     inkscape:window-y="24"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <metadata
     id="metadata4">
Created by potrace 1.15, written by Peter Selinger 2001-2017
<rdf:RDF>
  <cc:Work
     rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type
       rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
    <dc:title></dc:title>
  </cc:Work>
</rdf:RDF>
</metadata>
  <g
     transform="matrix(0.1,0,0,-0.1,-0.20791848,1149.9853)"
     id="g6"
     style="fill:'''

    end=''';stroke:none">
    <path
       d="m 11258,11497 c -177,-29 -377,-34 -524,-143 -199,-147 -860,-784 -2019,-1946 C 8308,9000 7632,8327 7214,7912 6309,7015 6348,7056 5460,6052 5336,5912 5089,5635 4910,5438 4731,5240 4471,4949 4331,4792 3368,3711 3101,3444 2170,2632 1991,2476 1800,2275 1745,2225 1690,2175 1535,2065 1400,1942 1265,1819 1019,1592 853,1439 L 551,807 448,804 C 163,798 20,686 3,455 -3,370 20,291 81,194 163,64 256,14 435,3 c 113,-7 212,8 283,43 67,33 181,142 212,203 29,57 36,142 17,202 l 50,47 302,165 c 484,429 655,418 1361,1023 789,676 1054,893 1452,1190 170,127 775,536 815,551 120,46 3281,2407 4988,3727 1837,1420 2476,1950 2747,2275 113,136 131,498 136,642 9,245 -67,435 -279,699 -154,191 -286,296 -453,361 -225,87 -592,402 -808,366 z"
       id="path8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccsscccccccccccccccccccc" />
  </g>
</svg>
'''
    return intro + color + end


def make_bat_50(color):
    intro = '''<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.0"
   width="1295.6393pt"
   height="1181.6849pt"
   viewBox="0 0 1295.6392 1181.6849"
   preserveAspectRatio="xMidYMid meet"
   id="svg2"
   inkscape:version="0.91 r13725"
   sodipodi:docname="bat_50.svg">
  <defs
     id="defs12" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1056"
     id="namedview10"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="0.59"
     inkscape:cx="799.7401"
     inkscape:cy="702.3348"
     inkscape:window-x="1920"
     inkscape:window-y="24"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <metadata
     id="metadata4">
Created by potrace 1.15, written by Peter Selinger 2001-2017
<rdf:RDF>
  <cc:Work
     rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type
       rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
    <dc:title></dc:title>
  </cc:Work>
</rdf:RDF>
</metadata>
  <g
     transform="matrix(0.1,0,0,-0.1,-0.20791848,1181.8171)"
     id="g6"
     style="fill:'''
    end = ''';stroke:none">
    <path
       d="m 11226,11817 c -177,-29 -345,-34 -492,-143 -199,-147 -860,-784 -2019,-1946 C 8308,9320 7632,8647 7214,8232 6309,7335 6348,7376 5460,6372 5336,6232 5089,5955 4910,5758 4731,5560 4471,5269 4331,5112 3368,4031 3101,3764 2170,2952 1991,2796 1800,2595 1745,2545 1690,2495 1535,2385 1400,2262 1265,2139 1019,1912 853,1759 L 551,1127 448,1124 C 163,1118 20,686 3,455 -3,370 20,291 81,194 163,64 256,14 435,3 c 113,-7 212,8 283,43 67,33 181,142 212,203 29,57 36,142 17,202 l 50,47 302,-75.00002 c 484,429 655,418 1361,1023.00002 789,676 1054,893 1452,1190 170,127 775,536 815,551 120,46 3281,2407 4988,3727 1837,1420 2476,1950 2747,2275 113,136 291,738 296,882 9,245 -111.203,310.525 -323.203,574.525 -154,191 -32,0 -278.085,315.441 -225,87 -914.712,892.034 -1130.712,856.034 z"
       id="path8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccsscccccccccccccccccccc" />
  </g>
</svg>
'''
    return intro + color + end


for i, step in enumerate(make_continuum(blue, green, mid=teal)):
    with open('Images/blue_green_' + str(i) + '.svg', 'w') as f:
        f.write(make_bat(step))

for i, step in enumerate(make_continuum(orange, yellow)):
    with open('Images/orange_yellow_' + str(i) + '.svg', 'w') as f:
        f.write(make_bat(step))

for i, step in enumerate(make_continuum(red, green)):
    with open('Images/red_green_' + str(i) + '.svg', 'w') as f:
        f.write(make_bat(step))

for i, step in enumerate(make_continuum(red, blue)):
    with open('Images/red_blue_' + str(i) + '.svg', 'w') as f:
        f.write(make_bat(step))

for i, step in enumerate(make_continuum(yellow, green)):
    with open('Images/yellow_green_' + str(i) + '.svg', 'w') as f:
        f.write(make_bat(step))

for i, step in enumerate(make_continuum(yellow, blue)):
    with open('Images/yellow_blue_' + str(i) + '.svg', 'w') as f:
        f.write(make_bat(step))
