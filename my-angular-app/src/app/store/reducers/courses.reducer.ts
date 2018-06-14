import { Action } from "@ngrx/store";
import { Course } from "../../models/course";
//importuj akcije

//ovde mislim da treba da se pozove baza da vrati sve kurseve, to je initial state
const initialState: Course[] = [];


export default function (state: Course[] = initialState, action: Action) {
      //case-ovi prvo, update course za rating njegov
      //load courses success
      return state;
}