# fluidreview-jquery
This project houses all of the javascript written on top of the General Operating Support application hosted by FluidReview. This author primarily used jquery rather than authoring plugins.  While FluidReview is a great drag-and-drop application builder, it lacks some out-of-the-box customization. The platform allows the builder to drop in a javascript box. The javascript box only applies to that application page (so, if a form has multiple pages, you'll need each page to have the javascript box dropped in). More about the javascript box here: https://fluidreview.zendesk.com/hc/en-us/articles/115002494634-JavaScript-Question


# How these files are organized

jquery code is added to EACH page in the application. For instance, the GOS Pre-Application has multiple form tasks, and some form tasks have multiple pages. So, something like the adjust-margins blob (https://github.com/avattt/fluidreview-jquery/blob/master/S-adjust-formmargins) will need to be pasted into EACH page used. 

So, this repository is organized as a library of jquery snippets. Each file that begins with S- (for snippet) has one example of one goal accomplished by one snippet of code, so it is easy to find specific code if it needs to be re-used in future customization of the application. 

There is one exception: FR-preapp-990worksheet -- because the 990 Worksheet is complex, with multiple different types of functions and steps working together, that page is it's own example rather than being broken down into it's components. This might be a task for later. 

The goal is to create a second category of files with a FR- prefix (for FluidReview) in order to have an actual copy of the javascript used on each page. 


# feedback an contributions

this is this user's first github repository. feedback and contributions are welcome!


# follow up questions
 - Switching Platforms
We may one day switch from FluidReview to SurveyMonkey Apply. I believe that this code would be easily transferrable to SurveyMonkey Apply (while needed to change out the variables), but I'm not sure yet. 

# follow up tasks
 - clarify what the elements selected (with $("#abcd1234") represent so that it is easier to substitute other elements


# helpful links

https://learn.jquery.com/plugins/basic-plugin-creation/
