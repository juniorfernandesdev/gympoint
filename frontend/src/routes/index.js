import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Student from '../pages/Student';
import StudentRegister from '../pages/Student/StudentRegister';
import StudentEdit from '../pages/Student/StudentEdit';

import PlanRegister from '../pages/Plans/PlanRegister';
import PlanEdit from '../pages/Plans/PlanEdit';
import Plans from '../pages/Plans';

import Membership from '../pages/Membership';
import MembershipRegister from '../pages/Membership/MembershipRegister';
import MembershipEdit from '../pages/Membership/MembershipEdit';

import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/student/register" component={StudentRegister} isPrivate />
      <Route path="/student/:id" component={StudentEdit} isPrivate />
      <Route path="/student" component={Student} isPrivate />

      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/register" component={PlanRegister} isPrivate />
      <Route path="/plans/:id" component={PlanEdit} isPrivate />

      <Route path="/memberships" exact component={Membership} isPrivate />
      <Route
        path="/memberships/register"
        component={MembershipRegister}
        isPrivate
      />
      <Route
        path="/memberships/:id/edit"
        component={MembershipEdit}
        isPrivate
      />

      <Route path="/helporder" component={HelpOrder} isPrivate />
    </Switch>
  );
}
