package com.example.timsCrawler.domain.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter // todo 나중엔 없애야 함 (테스트 목적으로 임시 사용)
public class MilitaryLateTimeResponseDto {
    Integer day;
    Integer hour;
    Integer min;
    Integer dayOff;
}
