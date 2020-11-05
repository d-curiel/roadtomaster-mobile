import { Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { IonTabBar, IonTabs } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage implements OnInit {
  hexagon: boolean = false;
  @ViewChild("tabs", { static: false }) tabs: IonTabs;
  constructor(private ngZone: NgZone) {}
  ngOnInit(): void {}

  ionViewWillEnter() {
    this.tabs.ionTabsDidChange.subscribe(
      () =>
        this.ngZone.run(() => {
          if (this.tabs.getSelected() === "tab-game") {
            this.hexagon = true;
          } else {
            this.hexagon = false;
          }
        })
    );
    this.tabs.select("tab-champions");
  }
  goToGame() {
    this.tabs.select("tab-game");
  }
}
