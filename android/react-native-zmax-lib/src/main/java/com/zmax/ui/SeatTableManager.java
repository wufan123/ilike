package com.zmax.ui;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by Administrator on 2017/9/18.
 */

public class SeatTableManager extends SimpleViewManager<SeatTable> {
    public static final String REACT_CLASS = "SeatTable";
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected SeatTable createViewInstance(ThemedReactContext reactContext) {
        SeatTable seatTable = new SeatTable(reactContext);
        seatTable.setScreenName("8号厅荧幕");//设置屏幕名称
        seatTable.setMaxSelected(3);//设置最多选中
        SeatTable.Seat[][] Seat = new SeatTable.Seat[10][7];
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 7; j++) {
                if (i == 0&&(j==0||j==1||j==2)) {
                    Seat[i][j] = new SeatTable.Seat(1);
                } else {
                    Seat[i][j] = new SeatTable.Seat(3);
                }
            }
        }
        seatTable.setData(Seat);
        return seatTable;
    }
}
