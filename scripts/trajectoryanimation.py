import moviepy.editor as mpy
import numpy as np
import matplotlib.pyplot as plt
from moviepy.video.io.bindings import mplfig_to_npimage # Necessary to convert the figures for use by moviepy


# The ratios between the flight time in the real
# world and the flight time in the simulation.
RailgunFactor = 40
TrebFactor    = 1.5
CannonFactor  = 12
CatFactor     = 1.5
BallFactor    = 1.5
RockFactor    = 20

# Set the muzzle velocities, the angle of launch 
# and the strength of gravity.
g           = 9.81
vrailgun    = 2400
vcannon     = 453
vtrebuchet  = 54
vcat        = 58
vball       = 67
vrock       = 905
theta       = np.deg2rad(45)

# Each initial state array contains the velocities in the 
# x direction, the y direction and the strength of gravity.
railgun = [ vrailgun * np.cos(theta), vrailgun * np.sin(theta), g ]
cannon  = [ vcannon * np.cos(theta), vcannon * np.sin(theta), g ]
treb    = [ vtrebuchet * np.cos(theta), vtrebuchet * np.sin(theta), g ]
cat     = [ vcat * np.cos(theta), vcat * np.sin(theta), g ]
ball    = [ vball * np.cos(theta), vball * np.sin(theta), g ]
rock    = [ vrock * np.cos(theta), vrock * np.sin(theta), g ]

# Calculate the maximum y attained by the projectile, 
# given the initial state array.
def maxheight (data):
    
    h = (data[1] ** 2) / (2 * data[2])
    
    return h

# Calculate the maximum x attained by the projectile,
# given the inital state array.
def maxrange (data):
    
    d = 4 * maxheight(data) / (data[1] / data[0])
    
    return d

# The total flight time, given the inital state array.
def tmax (data):
    
    tmax = 2 * data[1] / data[2]
    
    return tmax

# The x coordinate at time t, 
# given the inital state array.
def xpos (data,t):
    
    return data[0]*t
    
# The y coordinate at time t, 
# given the inital state array.
def ypos(data,t):
    
    return data[1]*t-0.5*data[2]*t**2

# Create a callable figure
fig = plt.figure()
ax = plt.axes()

# Remove the axes
ax.get_xaxis().set_visible(False)
ax.get_yaxis().set_visible(False)

# Declare the arrays to be used 
# to plot the trajectories
x1,y1=[],[]
x2,y2=[],[]
x3,y3=[],[]
x4,y4=[],[]
x5,y5=[],[]
x6,y6=[],[]

# Set the legend
ax.plot(x1,y1,'ro',label='Trebuchet')
ax.plot(x2,y2,'go',label='Cannon')
ax.plot(x3,y3,'yo',label='Railgun')
ax.plot(x4,y4,'bo',label='Mangonel')
ax.plot(x5,y5,'mo',label='Ballista')
ax.plot(x6,y6,'co',label='Rocket')
ax.legend()

# The function called by VideoClip to plot 
# each frame of the animation.
def make_frame(t):
    # For each time t, plot a dot for the position of
    # the projectiles.
    x1=(xpos(treb,TrebFactor*t)) # The 'TrebFactor' causes the simulation to
    y1=(ypos(treb,TrebFactor*t)) # run at Trebfactor times the speed of the 
    ax.plot(x1,y1,'ro')          # real world
    
    x2=(xpos(cannon,CannonFactor*(t-tmax(ball)/BallFactor))) # The difference is taken so that
    y2=(ypos(cannon,CannonFactor*(t-tmax(ball)/BallFactor))) # the cannon fires only once the
    ax.plot(x2,y2,'go')                                      # ballista model finishes.
    
    x3=(xpos(railgun,RailgunFactor*(t-tmax(cannon)/CannonFactor-tmax(ball)/BallFactor-tmax(rock)/RockFactor)))
    y3=(ypos(railgun,RailgunFactor*(t-tmax(cannon)/CannonFactor-tmax(ball)/BallFactor-tmax(rock)/RockFactor)))
    ax.plot(x3,y3,'yo')
    
    x4=(xpos(cat, CatFactor*t))
    y4=(ypos(cat, CatFactor*t))
    ax.plot(x4,y4,'bo')
    
    x5=(xpos(ball, BallFactor*t))
    y5=(ypos(ball, BallFactor*t))
    ax.plot(x5,y5,'mo')
    
    x6=(xpos(rock, RockFactor*(t-tmax(cannon)/CannonFactor-tmax(ball)/BallFactor)))
    y6=(ypos(rock, RockFactor*(t-tmax(cannon)/CannonFactor-tmax(ball)/BallFactor)))
    ax.plot(x6,y6,'co')
    
    # The while loops enlarge the axes as each weapon 
    # fires over increasingly large distances.
    while t < tmax(ball)/BallFactor:
        
        ax.set_xlim(0,maxrange(ball))  # Whilst the ballista fires, set the axes
        ax.set_ylim(0,maxheight(ball)) # to the limits of the motion.
        
        return mplfig_to_npimage(fig) # Return this image to VideoClip in the right format.
   
    while t <= tmax(cannon)/CannonFactor+tmax(ball)/BallFactor:
        
        ax.set_xlim(0,maxrange(cannon))  # Similar for the cannon
        ax.set_ylim(0,maxheight(cannon))
        
        return mplfig_to_npimage(fig)
    
    while t <= tmax(cannon)/CannonFactor+tmax(ball)/BallFactor+tmax(rock)/RockFactor:
        
        ax.set_xlim(0,maxrange(rock))  # Similar for the rocket
        ax.set_ylim(0,maxheight(rock))
        
        return mplfig_to_npimage(fig)
    
    while tmax(cannon)/CannonFactor+tmax(ball)/BallFactor+tmax(rock)/RockFactor < t:
        
        ax.set_xlim(0,maxrange(railgun))  # Similar for the Railgun
        ax.set_ylim(0,maxheight(railgun))
        
        return mplfig_to_npimage(fig)

# Set the clip to a callable object of duration equivalent to the total time taken for each weapon to fire.          
animation=mpy.VideoClip(make_frame, duration=(tmax(railgun)/RailgunFactor)\
+(tmax(cannon)/CannonFactor)+(tmax(ball)/BallFactor)+(tmax(rock)/RockFactor))

# Save the clip and set the frames per second.
animation.write_videofile("C:/Users/conne/OneDrive/Documents/3rd year/Physics in Society/Digital Media/testing.mp4",fps=10)