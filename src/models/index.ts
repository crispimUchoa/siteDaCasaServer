import {Task} from './Task'
import {User} from './User'
import {List} from './List'

Task.belongsToMany(User, {through: List})

User.belongsToMany(Task, {through: List})

export = {
  Task,
  User,
  List
}