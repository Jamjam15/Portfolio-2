09-25
Make it Aesthetic
Add design like Music Player UI


New Learnings:
Putting it all together, flex: 0 1 calc(25% - 10px); means:
The flex item will not grow beyond its specified width.
It can shrink if needed, but only when the flex container is too small.
Its initial width is calculated as 25% of the container width, minus a 10px gap, ensuring that up to four items can fit in a row with some spacing.



Putting it all together, this media query:
@media (max-width: 768px){
    .box, .button{
        flex: 1 1 100%;
        max-width: 100%;
    }
}
Activates when the viewport is 768 pixels or narrower.
Makes each .box and .button element take up the full width of the container, effectively stacking them vertically.
Ensures that if there's not enough space, the items can shrink to fit within the container, while their maximum width is limited to 100%.



<div class="button box">
    <button></button>
</div>
By separating the class names with a space in a single class attribute, the <div> will now have both the styles associated with .button and .box.

Padding: 10px;
Added padding in container to align it to center