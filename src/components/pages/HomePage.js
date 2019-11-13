import React from "react";
import { Link } from "react-router-dom";

import "./style/Homepage.css";
import roundedRectangle from "../../assests/svg/homepage/rounded-rectangle.svg";
import headerGraphic from "../../assests/img/header-graphic.png";

import lighning from "../../assests/svg/homepage/lightning.svg";
import bulb from "../../assests/svg/homepage/bulb.svg";
import task from "../../assests/svg/homepage/task.svg";
import collaboration from "../../assests/svg/homepage/collaboration.svg";
import web from "../../assests/svg/homepage/web.svg";
import mobile from "../../assests/svg/homepage/mobile.svg";

import projectBoard from "../../assests/img/project-board.png";

import taskRelation from "../../assests/svg/homepage/task.svg";
import automation from "../../assests/svg/homepage/automation.svg";
import multipleChecklist from "../../assests/svg/homepage/multiple-checklist.svg";
import recurringTask from "../../assests/svg/homepage/recurring-task.svg";
import timeTracking from "../../assests/svg/homepage/time-tracking.svg";
import customFields from "../../assests/svg/homepage/custom-field.svg";

import greyList from "../../assests/svg/homepage/grey-list.svg";
import greyDevices from "../../assests/svg/homepage/grey-devices.svg";
import greyTask from "../../assests/svg/homepage/grey-task.svg";
import greyProject from "../../assests/svg/homepage/grey-project.svg";
import greyManagement from "../../assests/svg/homepage/grey-management.svg";
import greyCloud from "../../assests/svg/homepage/grey-cloud.svg";

import checkmarkBlue from "../../assests/svg/homepage/checkmark-blue.svg";

import Footer from "./Footer";
const HomePage = () => {
    return (
        <>
            <main style={{ marginTop: "86px" }}>
                <section className="header">
                    <div column="" className="content-wrapper">
                        <img
                            className="header-arcs"
                            src={roundedRectangle}
                            alt=""
                        />
                        <h1 className="fw-black ta-center">
                            Manage Less. Do More.
                            <span className="h1 fw-light c-grey500 h-block">
                                Task Management for Teams
                            </span>
                        </h1>
                        <div className="signup-wrapper">
                            <form>
                                <input
                                    id="useremail"
                                    type="text"
                                    placeholder="Your Work Email"
                                    autoFocus
                                />
                                <input
                                    id="signup-button"
                                    value="Get Started for Free"
                                    type="submit"
                                    className="button blue signup"
                                />
                            </form>
                        </div>
                        <div>
                            <img
                                className="header-graphic"
                                src={headerGraphic}
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-blue">
                    <div className="content-wrapper">
                        <h2 className="ta-center c-white fw-light mb-20">
                            MeisterTask is an online task management tool for
                            teams.
                        </h2>
                        <h3 className="ta-center c-white fw-light">
                            Across the world, teams use MeisterTask to organize
                            and manage tasks in a beautifully designed,
                            customizable environment that adapts to their
                            individual needs. Kanban-style project boards allow
                            teams to create streamlined, automated workflows and
                            get more done together. It’s time you started on
                            your productivity journey...
                        </h3>
                    </div>
                </section>

                <section>
                    <div className="content-wrapper">
                        <h2 className="fw-black ta-center">
                            New to Online Task Management?
                        </h2>
                        <h2 className="ta-center mb-50">
                            At Meister, we pride ourselves on creating products
                            that are truly intuitive and user-friendly. Here's
                            what you can expect when you use MeisterTask:
                        </h2>
                        <div className="block-listing-wrapper">
                            <div className="block-listing-item-2">
                                <img
                                    className="js-lazy-image js-lazy-image-handled"
                                    src={lighning}
                                    alt=""
                                />
                                <h3>It’s easy to use</h3>
                                <p>
                                    When it comes to choosing the right online
                                    task management tool for your team,
                                    simplicity is key. Don’t waste your time
                                    with a clunky, complicated tool that
                                    requires hours of training — use
                                    MeisterTask.
                                </p>
                            </div>
                            <div className="block-listing-item-2">
                                <img
                                    className="js-lazy-image js-lazy-image-handled"
                                    src={bulb}
                                    alt=""
                                />
                                <h3>It's Tailored</h3>
                                <p>
                                    Many tools on the market clutter up their
                                    user interfaces with features in an effort
                                    to please everybody. This renders their
                                    products almost unusable. MeisterTask, by
                                    contrast, focuses on providing a tailored
                                    offering of the most essential features.
                                </p>
                            </div>
                            <div className="block-listing-item-2">
                                <img
                                    className="js-lazy-image js-lazy-image-handled"
                                    src={task}
                                    alt=""
                                />
                                <h3>It's Kanban</h3>
                                <p>
                                    Kanban has been hailed as the holy grail of
                                    project and team task management for good
                                    reason. MeisterTask’s kanban-style boards
                                    allow you to easily manage tasks while also
                                    maintaining a birds-eye view of your
                                    project’s progress.
                                </p>
                            </div>
                            <div className="block-listing-item-2">
                                <img
                                    className="js-lazy-image js-lazy-image-handled"
                                    src={collaboration}
                                    alt=""
                                />
                                <h3>It’s collaborative</h3>
                                <p>
                                    Give your team the means to work together
                                    efficiently. See what everyone’s working on.
                                    Get notified about new and completed tasks
                                    AND get insights into your team’s
                                    productivity with statistics and reports.
                                </p>
                            </div>

                            <div className="block-listing-item-2">
                                <img
                                    className="js-lazy-image js-lazy-image-handled"
                                    src={web}
                                    alt=""
                                />
                                <h3>It's web-based</h3>
                                <p>
                                    No download and no manual updating required.
                                    Perfect for remote teams or any team that
                                    has access to the internet and wants to be
                                    productive.
                                </p>
                            </div>

                            <div className="block-listing-item-2">
                                <img
                                    className="js-lazy-image js-lazy-image-handled"
                                    src={mobile}
                                    alt=""
                                />
                                <h3>It's mobile</h3>
                                <p>
                                    Stay up to date wherever you are with
                                    MeisterTask's free{" "}
                                    <a href="/">task management apps</a>.
                                    Available for Android and iOS. These apps
                                    come fully loaded with offline
                                    functionality.
                                </p>
                            </div>
                        </div>

                        <div className="h-flex justify-center mt-10">
                            <Link
                                className="iconed-button large mv-auto"
                                to="/register"
                            >
                                Sign Up for Free
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="bg-grey100">
                    <div className="content-wrapper split-section">
                        <div className="small-section">
                            <h2 className="fw-black mb-10">
                                A Workflow That Makes Sense
                            </h2>
                            <p>
                                Make use of our predefined workflow. It’s helped
                                thousands of people work efficiently and
                                collaboratively. Or create your own customized
                                workflow to suit your team’s specific needs.
                            </p>
                        </div>
                        <div className="big-section">
                            <img
                                className="resp-img-600px bs-big rad-10px mv-20 maxh-400 js-lazy-image js-lazy-image-handled"
                                src={projectBoard}
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content-wrapper">
                        <h2 className="fw-black ta-center">
                            Outstanding Features &amp; Automations
                        </h2>
                        <h2 className="ta-center mb-50">
                            Power features allow you to automate your workflow
                            and save time every day:
                        </h2>
                        <div className="block-listing-wrapper">
                            <div className="block-listing-item-2 with-link">
                                <img src={taskRelation} alt="" />
                                <h3>Task Relationships</h3>
                                <p>
                                    Mark tasks as related to, duplicated or
                                    blocked by other tasks. Get notified when a
                                    blockage is resolved.
                                </p>
                            </div>
                            <div className="block-listing-item-2 with-link">
                                <img src={automation} alt="" />
                                <h3>Automations</h3>
                                <p>
                                    Configure automatic actions within your
                                    projects and let our system do all the work
                                    for you. That way you work smarter, not
                                    harder.
                                </p>
                            </div>
                            <div className="block-listing-item-2 with-link">
                                <img src={multipleChecklist} alt="" />
                                <h3>Multiple Checklists</h3>
                                <p>
                                    Break up long lists of to-dos into
                                    manageable sub-lists that can be saved and
                                    reused.
                                </p>
                            </div>
                            <div className="block-listing-item-2 with-link">
                                <img src={recurringTask} alt="" />
                                <h3>Recurring Tasks</h3>
                                <p>
                                    Set up recurring tasks for to-dos that need
                                    to be repeated and never start from scratch
                                    again.
                                </p>
                            </div>
                            <div className="block-listing-item-2 with-link">
                                <img src={timeTracking} alt="" />
                                <h3>Time Tracking</h3>
                                <p>
                                    Ready, set, go! Know exactly how long it
                                    took you to complete a task by making use of
                                    MeisterTask’s built-in time tracking. That
                                    way you always remain accountable, avoid
                                    unnecessary distractions and stay focused.
                                </p>
                            </div>
                            <div className="block-listing-item-2 with-link">
                                <img src={customFields} alt="" />
                                <h3>Custom Fields</h3>
                                <p>
                                    Define custom fields for your projects.
                                    These fields automatically appear within
                                    each task, reminding team members to
                                    complete this information.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="equal-split">
                    <div className="row">
                        <div className="block-wrapper">
                            <div className="content-block">
                                <img
                                    className="maxw-130 js-lazy-image js-lazy-image-handled"
                                    src={greyList}
                                    alt="List Icon"
                                />
                                <h2>What is task management?</h2>
                                <p>
                                    A task is simply a to-do. Something that is
                                    on your list of things to work on. Task
                                    management is the act of keeping track of
                                    said tasks from assignment to completion.
                                    So, task management involves the sorting,
                                    delegating, planning, prioritizing,
                                    organizing, tracking and reporting of tasks.
                                </p>
                            </div>
                        </div>
                        <div className="block-wrapper">
                            <div className="content-block">
                                <img
                                    className="maxw-130 js-lazy-image js-lazy-image-handled"
                                    src={greyDevices}
                                    alt="Device Icon"
                                />
                                <h2>What is task management software?</h2>
                                <p>
                                    Task management software is software that
                                    turns the principles of task management into
                                    a usable application. This application
                                    allows individuals and/or teams to digitally
                                    organize, assign and keep track of their
                                    tasks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="block-wrapper">
                            <div className="content-block">
                                <img
                                    className="maxw-200 js-lazy-image js-lazy-image-handled"
                                    src={greyTask}
                                    alt="Task Icon"
                                />
                                <h2>In a nutshell…</h2>
                                <p>
                                    Task management software is a computer
                                    program that enables you to create tasks or
                                    to-dos. These tasks can be grouped into a
                                    project board, and they can also be assigned
                                    to the persons responsible. And finally,
                                    task management software allows you to keep
                                    track of your tasks’ progress.
                                </p>
                            </div>
                        </div>
                        <div className="block-wrapper">
                            <div className="content-block">
                                <img
                                    className="maxw-300 js-lazy-image js-lazy-image-handled"
                                    src={greyProject}
                                    alt="Project Icon"
                                />
                                <h2> What is Kanban?</h2>
                                <p>
                                    Many task management tools use the Kanban
                                    method because it’s the most visual way to
                                    engage with tasks. It involves creating a
                                    project (e.g. Editorial Calendar), along
                                    with a workflow (e.g. To do &gt; In Progress
                                    &gt; Done), populating it with tasks (things
                                    to do) and subsequently moving them through
                                    the workflow.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="block-wrapper">
                            <div className="content-block">
                                <img
                                    className="maxw-200 js-lazy-image js-lazy-image-handled"
                                    src={greyManagement}
                                    alt="Management Icon"
                                />
                                <h2>Why is task management important?</h2>
                                <p>
                                    The larger a project becomes, the more
                                    people involved, the more difficult it is to
                                    stay on top of tasks and progress. Using a
                                    task management tool enables you to manage
                                    projects of all types and sizes, from
                                    software sprints to editorial calendars and
                                    from sales funnels to support boards. That
                                    way you never lose sight of your to-dos or
                                    miss important deadlines.
                                </p>
                            </div>
                        </div>
                        <div className="block-wrapper">
                            <div className="content-block">
                                <img
                                    className="maxw-84 js-lazy-image js-lazy-image-handled"
                                    src={greyCloud}
                                    alt="Cloud Icon"
                                />
                                <h2>
                                    What are the advantages of task management
                                    tools?
                                </h2>
                                <p>
                                    MeisterTask runs directly in your
                                    web-browser, all you need is an
                                    internet-connected device. With all your
                                    project-related information safely stored in
                                    the cloud, it remains traceable and
                                    accessible for all project members at all
                                    times. What’s more, you needn’t worry about
                                    stringent hardware requirements or
                                    downloading software that will take up space
                                    on your device and be due for an update in
                                    the near future. We do it all for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="content-wrapper">
                        <h2 className="fw-black">How do I know</h2>
                        <h2 className="mb-50">
                            that MeisterTask is the best task management tool
                            for me and my team?
                        </h2>
                        <div className="h-flex mb-20">
                            <img
                                className="s-24 p-4 mr-15"
                                src={checkmarkBlue}
                                alt="Check Mark"
                            />
                            <h4>Do you need a tool that’s easy to use?</h4>
                        </div>
                        <div className="h-flex mb-20">
                            <img
                                className="s-24 p-4 mr-15 js-lazy-image js-lazy-image-handled"
                                src={checkmarkBlue}
                                alt="Check Mark"
                            />
                            <h4>
                                Do you need a tool that can be used
                                collaboratively?
                            </h4>
                        </div>
                        <div className="h-flex mb-20 ">
                            <img
                                className="s-24 p-4 mr-15 js-lazy-image js-lazy-image-handled"
                                src={checkmarkBlue}
                                alt="Check Mark"
                            />
                            <h4>
                                Do you need a tool that is not limited to a
                                device?
                            </h4>
                        </div>
                        <div className="h-flex mb-20">
                            <img
                                className="s-24 p-4 mr-15 js-lazy-image js-lazy-image-handled"
                                src={checkmarkBlue}
                                alt="Check Mark"
                            />
                            <h4>
                                Do you work remotely? Or do you work within a
                                remote team?
                            </h4>
                        </div>
                        <div className="h-flex mb-20">
                            <img
                                className="s-24 p-4 mr-15 js-lazy-image js-lazy-image-handled"
                                src={checkmarkBlue}
                                alt="Check Mark"
                            />
                            <h4>
                                Do you need a task management tool which allows
                                tasks to be accessed by all collaborators?
                            </h4>
                        </div>
                        <div className="h-flex mb-50">
                            <img
                                className="s-24 p-4 mr-15 js-lazy-image js-lazy-image-handled"
                                src={checkmarkBlue}
                                alt="Check Mark"
                            />
                            <h4>Do you need a task tracking tool?</h4>
                        </div>
                        <h4 className="fw-heavy mb-60">
                            If you answered yes to any of these questions then
                            yes — MeisterTask is the best task management tool
                            for you and your team! So, what are you waiting for?
                        </h4>
                        <Link className="iconed-button large" to="/register">
                            Get Started for Free
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
