# Boris Bikes

This challenge was to write a program that simulates the Boris Bike system in London.

## User Stories
```
As a member of the public
So that I can use a bike
I'd like a docking station to release a bike
```

```
As a member of the public
So that I can use a good bike
I'd like to see if a bike is working
```

```
As a member of the public
So I can return bikes I've hired
I want to dock my bike at the docking station
```

```
As a member of the public
So I can decide whether to use the docking station
I want to see a bike that has been docked
```

```
As a member of the public,
So that I am not confused and charged unnecessarily,
I'd like docking stations not to release bikes when there are none available.
```

```
As a system maintainer,
So that I can control the distribution of bikes,
I'd like docking stations not to accept more bikes than their capacity.
```

```
As a system maintainer,
So that I can plan the distribution of bikes,
I want a docking station to have a default capacity of 20 bikes.
```

```
As a system maintainer,
So that busy areas can be served more effectively,
I want to be able to specify a larger capacity when necessary.
```

```
As a member of the public,
So that I reduce the chance of getting a broken bike in future,
I'd like to report a bike as broken when I return it.
```

```
As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations not to release broken bikes.
```

```
As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations to accept returning bikes (broken or not).
```

## How to use this code

In the Console:

```Using the console while viewing the SpecRunner.HTML
 > docking_station = new dockingStation(7);
 => DockingStation {_dockedBikes: Array(0), _capacity: 7}
 > bike_1 = new Bike;
 => Bike {_condition: "Working"}
 > bike_2 = new Bike;
 => Bike {_condition: "Working"}
 > docking_station.dockBike(bike_1);
 => "Thank you! You have successfully docked your Bike."
 > dock.showDockedBikes();
 => [Bike]
 > bike_2.isBroken();
 => "The bike has been reported as broken"
 > docking_station.dock(bike_2);
 => "Thank you! You have successfully docked your Bike."
 > bike_2.showCondition();
 => "Broken"
 > docking_station.dockBike(bike_2);
 => "Thank you! You have successfully docked your Bike."
 > docking_station.showDockedBikes();
 => [Bike, Bike]
 *if working bike*
 > docking_station.releaseBike();
 => "Enjoy your ride! Please update the bikes condition if you have any problems."
 > docking_station.showDockedBikes();
 => [Bike]
 *if broken bike*
 > docking_station.releaseBike();
 => dockingStation.js:22 Uncaught Error: Bike is Broken and cannot be released - try another one!
    at DockingStation.releaseBike (dockingStation.js:22)
```

## Notes

If the docking station contains both working and broken bikes, you will have to try release a bike a few times. You will be  told if the  bike is broken and it will not be released.

## How to run tests

Use Jasmine to run tests:

```
bundle install
copy the full path for the SpecRunnerHTML
```

The Javascript folders and Spec folders are added to this SpecRunner in order already.
